@echo off
echo ========================================
echo  Build Script - Portfolio Lucas Teofilo
echo ========================================
echo.

REM Verificar se Docker está instalado
docker --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERRO] Docker não está instalado!
    echo.
    echo Para instalar o Docker:
    echo 1. Acesse: https://www.docker.com/products/docker-desktop
    echo 2. Baixe e instale o Docker Desktop
    echo 3. Reinicie o computador
    echo 4. Execute este script novamente
    echo.
    pause
    exit /b 1
)

echo [INFO] Docker encontrado! Iniciando build...
echo.

REM Construir a imagem
echo [1/3] Construindo a imagem Docker...
docker build -t portfolio-lucasteoffilo .
if %errorlevel% neq 0 (
    echo [ERRO] Falha ao construir a imagem!
    pause
    exit /b 1
)

echo.
echo [2/3] Parando container anterior (se existir)...
docker stop portfolio 2>nul
docker rm portfolio 2>nul

echo.
echo [3/3] Iniciando o container...
docker run -d -p 8080:80 --name portfolio portfolio-lucasteoffilo
if %errorlevel% neq 0 (
    echo [ERRO] Falha ao iniciar o container!
    pause
    exit /b 1
)

echo.
echo ========================================
echo  BUILD CONCLUIDO COM SUCESSO!
echo ========================================
echo.
echo O portfolio está rodando em:
echo http://localhost:8080
echo.
echo Comandos úteis:
echo - Ver logs: docker logs portfolio
echo - Parar: docker stop portfolio
echo - Remover: docker rm portfolio
echo.
pause