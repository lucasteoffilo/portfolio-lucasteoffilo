@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo ========================================
echo    🐳 Portfolio Angular - Docker Build
echo ========================================
echo.

:: Verificar se Docker está instalado
docker --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Docker não está instalado ou não está no PATH
    echo.
    echo 📥 Para instalar o Docker:
    echo    1. Acesse: https://www.docker.com/products/docker-desktop
    echo    2. Baixe e instale o Docker Desktop
    echo    3. Reinicie o computador
    echo    4. Execute este script novamente
    echo.
    pause
    exit /b 1
)

echo ✅ Docker encontrado!
echo.

:: Verificar se Docker está rodando
docker info >nul 2>&1
if errorlevel 1 (
    echo ❌ Docker não está rodando
    echo.
    echo 🚀 Iniciando Docker Desktop...
    start "" "C:\Program Files\Docker\Docker\Docker Desktop.exe"
    echo.
    echo ⏳ Aguardando Docker inicializar (30 segundos)...
    timeout /t 30 /nobreak >nul
    
    :: Verificar novamente
    docker info >nul 2>&1
    if errorlevel 1 (
        echo ❌ Docker ainda não está rodando
        echo    Por favor, inicie o Docker Desktop manualmente e execute este script novamente
        pause
        exit /b 1
    )
)

echo ✅ Docker está rodando!
echo.

:: Menu de opções
echo 🔧 Escolha uma opção:
echo.
echo [1] Build e executar em produção (porta 8080)
echo [2] Executar apenas (se já foi buildado)
echo [3] Parar container
echo [4] Ver logs
echo [5] Limpar containers antigos
echo [6] Build completo (limpar cache)
echo [0] Sair
echo.
set /p choice=Digite sua escolha (0-6): 

if "%choice%"=="1" goto build_and_run
if "%choice%"=="2" goto run_only
if "%choice%"=="3" goto stop_container
if "%choice%"=="4" goto show_logs
if "%choice%"=="5" goto cleanup
if "%choice%"=="6" goto build_clean
if "%choice%"=="0" goto end

echo ❌ Opção inválida!
goto end

:build_and_run
echo.
echo 🔨 Construindo imagem Docker...
docker build -t lucasteoffilo-portfolio .
if errorlevel 1 (
    echo ❌ Erro no build da imagem
    goto end
)

echo.
echo 🛑 Parando container anterior (se existir)...
docker stop lucasteoffilo-portfolio-container 2>nul
docker rm lucasteoffilo-portfolio-container 2>nul

echo.
echo 🚀 Iniciando container...
docker run -d -p 8080:80 --name lucasteoffilo-portfolio-container lucasteoffilo-portfolio
if errorlevel 1 (
    echo ❌ Erro ao iniciar container
    goto end
)

echo.
echo ✅ Container iniciado com sucesso!
echo.
echo 🌐 Acesse o portfólio em: http://localhost:8080
echo.
echo 📊 Status do container:
docker ps --filter name=lucasteoffilo-portfolio-container
goto end

:run_only
echo.
echo 🚀 Iniciando container...
docker run -d -p 8080:80 --name lucasteoffilo-portfolio-container lucasteoffilo-portfolio
if errorlevel 1 (
    echo ❌ Erro ao iniciar container
    echo    Talvez a imagem não exista. Execute a opção 1 primeiro.
    goto end
)

echo ✅ Container iniciado!
echo 🌐 Acesse: http://localhost:8080
goto end

:stop_container
echo.
echo 🛑 Parando container...
docker stop lucasteoffilo-portfolio-container
docker rm lucasteoffilo-portfolio-container
echo ✅ Container parado e removido!
goto end

:show_logs
echo.
echo 📋 Logs do container:
echo ========================================
docker logs lucasteoffilo-portfolio-container
echo ========================================
goto end

:cleanup
echo.
echo 🧹 Limpando containers e imagens antigas...
docker container prune -f
docker image prune -f
echo ✅ Limpeza concluída!
goto end

:build_clean
echo.
echo 🧹 Limpando cache do Docker...
docker builder prune -f
echo.
echo 🔨 Build completo (sem cache)...
docker build --no-cache -t lucasteoffilo-portfolio .
if errorlevel 1 (
    echo ❌ Erro no build
    goto end
)
echo ✅ Build concluído!
goto end

:end
echo.
echo 📝 Comandos úteis:
echo    docker ps                              # Ver containers rodando
echo    docker logs lucasteoffilo-portfolio-container  # Ver logs
echo    docker stop lucasteoffilo-portfolio-container  # Parar container
echo    docker-compose up -d                   # Usar docker-compose
echo.
echo 🔗 Links úteis:
echo    Portfolio: http://localhost:8080
echo    Docker Desktop: https://www.docker.com/products/docker-desktop
echo.
echo 📞 Suporte:
echo    Email: lucasteofilo.contato@gmail.com
echo    WhatsApp: (21) 9 9948-0951
echo.
pause