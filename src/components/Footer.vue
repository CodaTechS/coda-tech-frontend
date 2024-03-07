 <template>
        <footer>
            <section class="footer-section logo-section">
            <img src="@/assets/img/codaTech.png" alt="Logo da CodaTech">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae nesciunt neque alias. Dolores saepe esse doloremque? Dignissimos nam sed voluptatem tempora tempore distinctio illo qui repellendus, facere recusandae soluta.
            </p>
            </section>

            <section class="footer-section contact-section">
            <h3>Informações de Contato</h3>
            <address>
                <p>Telefone <a href="tel:+551999999999">+55 19 9999-9999</a></p>
                <p>Email: <a href="mailto:contact@codatech.com">contact@codatech.com</a></p>
            </address>
            <div class="social-media-links" aria-label="Redes Sociais">
                <a href="#"><img src="@/assets/img/facebook.png" alt="Ícone do Facebook"></a>
                <a href="#"><img src="@/assets/img/instagram.png" alt="Ícone do Instagram"></a>
                <a href="#"><img src="@/assets/img/twitter.png" alt="Ícone do Twitter"></a>
                <a href="#"><img src="@/assets/img/whatsapp.png" alt="Ícone do WhatsApp"></a>
                <a href="#"><img src="@/assets/img/tiktok.png" alt="Ícone do TikTok"></a>
            </div>
            </section>

            <section class="footer-section supply-section">
                <h3>Horário de Funcionamento</h3>
                <p>Das 09h às 18h, de segunda a sexta-feira</p>
            </section>

            <section class="footer-section rights-section">
                <p>&copy; 2024. CodaTech Solutions. Todos os direitos reservados. <a href="#">Política de Privacidade</a></p>
            </section>
        </footer>
    </template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Roboto:wght@400;500&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

:root{
    --c00:#F5F7FF;
    --c01:#E5ECFF;
    --c02:#CDDBFF;
    --c03:#B3C8ff;
    --c04:#9BB6FB;
    --C05:#8099DA;
    --c06:#6179AC;
    --c07:#53689D;
    --c08:#465783;
    --C09:#3B486A;
    --c10:#2F384F;
    --c11:#151820;

}

footer {
    width: 100%;
    max-width: 1000px;
    min-width: 300px;
    background-color: #E5ECFF;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto 1fr;
    font-family: "roboto";
}

.footer-section-logo-section, .footer-section-contact-section, .footer-section-supply-section {
    padding: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.footer-section-logo-section p, .footer-section-contact-section h3, .footer-section-supply-section h3 {
    margin-top: 8px;
}

.footer-section-logo-section img{
    margin-bottom: 15px;
}

.footer-section-contact-section h3, .footer-section-supply-section h3 {
    font-size: 32px;
    margin-bottom: 30px;
}

.green-dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: green;
    border-radius: 50%;
    margin-right: 5px;
}

.footer-section-rights-section {
    display: flex;
    justify-content: center;
    align-items: center;

}

a{
    text-decoration: none;
    color: black;
}

@media screen and (max-width: 768px) {
    footer{
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }

}

@media screen and (max-width: 426px) {
    footer{
        grid-template-columns: repeat(1, 1fr);
        padding: 3rem 2rem;
    }

}
</style>
