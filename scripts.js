// FILE: scripts.js
// DATE: 2024-08-29

document.addEventListener('DOMContentLoaded', () =>
{
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeBtn = document.querySelector('.close');

    document.querySelectorAll('.pictures img').forEach
    (img =>
    {
        img.addEventListener
        ('click', () =>
            {
                modal.classList.remove('fade-out');
                modal.classList.add('fade-in');
                modal.style.display = 'flex';
                modalImage.src = img.src;
            }
        );
    });

    function closeModal()
    {
        modal.classList.remove('fade-in');
        modal.classList.add('fade-out');
        setTimeout
        (
            () =>
            {
                modal.style.display = 'none';
                modal.classList.remove('fade-out');
            },
            300
        );
    }

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener
    (
        'click', (event) =>
        {
            if (event.target === modal)
            { closeModal();
                
            }
        }
    );
});

class Header extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `
        <header class="box">
        <nav>
            <div style="display: flex; align-items: center;">
                <img src="/oknauta/src/profile_pic_1.png" alt="Profile picture" width="90" style="margin-right: 10px; box-shadow: 4px 4px 0px green; border-radius: 10px;">
                <a href="/oknauta/" class="logo">oknauta</a>
            </div>
            <div class="nav-links">
                <a href="/oknauta/portfolio">Portfólio</a>
                <a href="/oknauta/articles">Artigos</a>
            </div>
        </nav>
    </header>
        `
    }
}

class Footer extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `
        <footer class="box">
            <p>&copy; 2024 oknauta</p>
            <p>Por favor, não copie este site :)</p>
        </footer>
        `
    }
}

if (!customElements.get('my-header')) {
    customElements.define('my-header', Header);
}

if (!customElements.get('my-footer')) {
    customElements.define('my-footer', Footer);
}
