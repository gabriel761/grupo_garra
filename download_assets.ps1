$baseUrl = "http://localhost:3845/assets"
$outputDir = "public\assets"

# Map: hash+extension (exactly as used in the code) => local filename
$assets = @{
    # PNGs
    "9d4fe84cb1b918b576193f71b15217bef21d3834.png" = "hero-bg.png"
    "cd0831c80bcb13bf4f9f6e13e1edf3f4d20c97ae.png" = "logo.png"
    "be85e9f589c98379b29a91ea7c9c8853c600792d.png" = "industria-petroleo.png"
    "92fc14c031fc53a7f366011574c02c2fd3cc968a.png" = "industria-maquinas.png"
    "c7ddb79cce5654ccf4ac9039583017b6043b88b1.png" = "industria-construcao.png"
    "ffc63d733a4b0cc47d2a91bf1195e3b1c8c8243d.png" = "cta-bg.png"
    "7f5f8092872c17f0b767b3d653742dbe1e9e172b.png" = "sobre-servicos-bg.png"
    "6e83ea0f4179de1b338be6c298512afa4612d928.png" = "sobre-hero.png"
    "d3a43099483754cc03e6513dc3c63e7a199c25ba.png" = "sobre-intro.png"
    "daff1719f5536073fd2118d138c2a053ef195cf7.png" = "servicos-hero.png"
    "e142e91b2a67fd21adfb88fb26b1eb8df3bbbd4c.png" = "contato-hero.png"
    # SVGs - Servicos icons
    "d479d56ef09bf7d80b44cb755afb6a638647b292.svg" = "icon-metalurgia-1.svg"
    "a57db61874806735e916945f7b4501382efda469.svg" = "icon-metalurgia-2.svg"
    "5b338bf3d39fc520b62b6679ccb9fa9133b6f96b.svg" = "icon-caldeira.svg"
    "fd0f94bc45a13082f67d33becccadde50baf10d3.svg" = "icon-geradores.svg"
    "bc36438ca6827fdb6d03bf141a6c0b9e7106901d.svg" = "icon-maquinas-industriais.svg"
    "d76f8cb235b7ba5f2bf620f26a4913e7d09f4a0e.svg" = "icon-embarcacoes.svg"
    "7fda7d77890f9d10a0975ef8b495a480e07e5e8f.svg" = "icon-navegacao-maritimo.svg"
    "62af71b2712b4ba190b5d1969ad15b7f4eb65651.svg" = "icon-instalacao-maquinas.svg"
    "f30149b287c46cad9e0d00447a9cd77a1717d341.svg" = "icon-prospeccao-petroleo.svg"
    "0ca3cbe8ba66d38268cb5b2ed3872b448180efd1.svg" = "icon-maquinas-motrizes.svg"
    "06caa7875f6dceca7f79d97240c3d4b552906a65.svg" = "icon-recuperacao-metais.svg"
    "eb0fa9631517c2ebceb970ef281905530c33d4c7.svg" = "icon-edificios.svg"
    "99f2c8c6be106716099286ac538407dd1efeda97.svg" = "icon-obras-portuarias.svg"
    "268884bd21428057baa4a8524b353127b57e19f5.svg" = "icon-alvenaria.svg"
    "9ef9a8db088eaa7123a1f258a5cb16265604727d.svg" = "icon-servicos-especializados.svg"
    "532bb772c8902cf421f07c63d328a523b8d48d61.svg" = "icon-comercio-ferragens.svg"
    # SVGs - Values icons
    "cc4cd7765cfde9f3599312a861cf884227694138.svg" = "icon-custo-reduzido.svg"
    "a73a625113f5d6c6d8845871704bc6bdc0478213.svg" = "icon-variedade.svg"
    "c064df0bc8dcb74391d0ba1e86436fdd879de158.svg" = "icon-eficiencia.svg"
}

$successCount = 0
$failCount = 0

foreach ($hashWithExt in $assets.Keys) {
    $filename = $assets[$hashWithExt]
    $url = "$baseUrl/$hashWithExt"
    $outputPath = Join-Path $outputDir $filename
    
    try {
        Write-Host "Downloading $filename from $url ..."
        Invoke-WebRequest -Uri $url -OutFile $outputPath -UseBasicParsing
        Write-Host "  OK: $filename" -ForegroundColor Green
        $successCount++
    } catch {
        Write-Host "  FAILED: $filename - $($_.Exception.Message)" -ForegroundColor Red
        $failCount++
    }
}

Write-Host ""
Write-Host "Done! $successCount downloaded, $failCount failed." -ForegroundColor Cyan

