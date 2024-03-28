 <template>
        <footer>
            <section class="footer-section-logo-section">
            <img src="@/assets/img/codaTech.png" alt="Logo da CodaTech">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae nesciunt neque alias. Dolores saepe esse doloremque? Dignissimos nam sed voluptatem tempora tempore distinctio illo qui repellendus, facere recusandae soluta.
            </p>
            </section>

            <section class="footer-section-contact-section">
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

            <section class="footer-section-supply-section">
                <h3>Horário de Funcionamento</h3>
                <p>Das 09h às 18h, de segunda a sexta-feira</p>
            </section>

        </footer>

        <section class="footer-section-rights-section">
                <p>&copy; 2024. CodaTech Solutions. Todos os direitos reservados. <a href="#">Política de Privacidade</a></p>
          </section>

    </template>

<style scoped>

  footer {
    width: 100%;
    height: 100%;
    background-color: #E5ECFF;
    justify-content: space-between;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-family:'poppins', sans-serif;
    box-sizing: border-box;
}

.footer-section-logo-section, .footer-section-contact-section,.footer-section-supply-section{
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family:'poppins', sans-serif;
}

.footer-section-logo-section p, .footer-section-contact-section h3, .footer-section-supply-section h3 {
    margin-top: 8px;
    font-family:'poppins', sans-serif;
}

.footer-section-logo-section img{
    margin-bottom: 15px;
}

.footer-section-contact-section h3, .footer-section-supply-section h3 {
    font-size: 32px;
    margin-bottom: 30px;
    text-align: center;
    font-family:'poppins', sans-serif;
}

.footer-section-rights-section {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E5ECFF;
}

.footer-section-supply-section{
  margin-bottom: 50px;
}

.social-media-links img{
  display: inline-block;
  justify-content: space-between;
  align-items: center;
}

a{
    text-decoration: none;
    color: black;
}

@media screen and (max-width: 768px) {
  footer{
    display: inline-block;
  }

  .footer-section-logo-section{
    display: flex;
    align-items: start;
    text-align: center;
    font-family:'poppins', sans-serif;
  }

  .footer-section-contact-section{
    display: flex;
    align-items: start;
    text-align: center;
    justify-content: center;
    font-family:'poppins', sans-serif;
  }

  .social-media-links{
    justify-content: space-between;
  }

  .footer-section-supply-section{
    display: flex;
    align-items: start;
    text-align: center;
    font-family:'poppins', sans-serif;
  }

  .footer-section-rights-section{
    display: flex;
    align-items: start;
    text-align: center;
    font-family:'poppins', sans-serif;
  }
}
</style>
