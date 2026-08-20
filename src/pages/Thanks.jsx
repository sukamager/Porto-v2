import { Link } from 'react-router-dom'
import './Thanks.css'

export default function Thanks() {
  return (
    <div className="thanks-page">
      <nav>
        <div className="nav-container">
          <div className="logo">
            Suka <span>Mager</span>
          </div>
        </div>
      </nav>
      <div className="center-wrapper">
        <div className="thanks-container">
          <h1>Terima Kasih!</h1>
          <p>Pesan kamu udah berhasil dikirim bre. nanti Ilul balas secepatnya yaa.</p>
          <Link to="/home">Kembali ke Beranda</Link>
        </div>
      </div>
    </div>
  )
}
