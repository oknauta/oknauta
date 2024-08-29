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