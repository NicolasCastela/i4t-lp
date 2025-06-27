    function mostrarBanner(tipo) {
        // Esconde todos
        let banners = document.querySelectorAll('.card-banner-section');
        banners.forEach(function (banner) {
            banner.style.display = 'none';
        });
        // Mostra todos que têm o data-banner igual ao tipo
        let encontrados = 0;
        document.querySelectorAll('.card-banner-section[data-banner="' + tipo + '"]').forEach(function (banner) {
            banner.style.display = 'flex';
            encontrados++;
        });

        // Mensagem de "não encontramos nenhum"
        let msg = document.getElementById('nenhum-encontrado-msg');
        if (!msg) {
            msg = document.createElement('div');
            msg.id = 'nenhum-encontrado-msg';
            msg.style.textAlign = 'center';
            msg.style.margin = '0';
            msg.style.color = '#888';
            msg.textContent = 'Não encontramos nenhum resultado.';
            msg.style.backgroundColor = '#f9f9f9';
            msg.style.padding = '16px';
            msg.style.borderRadius = '8px';
            // Insere após o último banner
            let parent = banners[0]?.parentNode;
            if (parent) parent.appendChild(msg);
        }
        msg.style.display = encontrados === 0 ? 'block' : 'none';
    }


    


   document.addEventListener('DOMContentLoaded', function () {
    const searchBtn = document.querySelector('.search-box button');
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }
    if (searchBtn) {
        searchBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const valor = searchInput.value.trim().toLowerCase();
            let encontrados = 0;
            document.querySelectorAll('.card-banner-section').forEach(function (banner) {
                const tipo = (banner.getAttribute('data-banner') || '').toLowerCase();
                if (tipo.includes(valor) || valor === '') {
                    banner.style.display = 'flex';
                    encontrados++;
                } else {
                    banner.style.display = 'none';
                }
            });

            // Mensagem de "não encontramos nenhum"
            let msg = document.getElementById('nenhum-encontrado-msg');
            if (!msg) {
                msg = document.createElement('div');
                msg.id = 'nenhum-encontrado-msg';
                msg.style.textAlign = 'center';
                msg.style.margin = '0';
                msg.style.color = '#888';
                msg.textContent = 'Não encontramos nenhum resultado.';
                msg.style.backgroundColor = '#f9f9f9';
                msg.style.padding = '16px';
                msg.style.borderRadius = '8px';
                // Insere após o último banner
                let banners = document.querySelectorAll('.card-banner-section');
                let parent = banners[0]?.parentNode;
                if (parent) parent.appendChild(msg);
            }
            msg.style.display = encontrados === 0 ? 'block' : 'none';
        });
    }
});

