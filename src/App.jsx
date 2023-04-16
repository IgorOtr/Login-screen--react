import './assets/css/styles.css'
import logo from './assets/images/my__logo.png'
function App() {

  return (
      <div className="container">
        <div className="container__login">
          <div className="box__login">
            <form className="login__form">

              <div className="login__form__title">
                <h3>Bem vindo</h3>
              </div>

              <div className="login__form__logo">
                <img width={120} src={logo} alt="" />
              </div>

              <div className="input__group">
                <div className="input__email">
                  <label htmlFor="">Email</label>
                  <input type="text" placeholder="Email"/>
                </div>
                <div className="input__password">
                  <label htmlFor="">Senha</label>
                  <input type="text" placeholder="Senha"/>
                </div>
                <div className="submit__btn">
                  <button>Entrar</button>
                </div>
              </div>

              <div className="social__icons">
                <p>Não possúi conta? <a href="">Criar agora</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}


export default App
