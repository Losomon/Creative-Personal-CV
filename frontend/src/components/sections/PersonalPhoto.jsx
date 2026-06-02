import '../../styles/components/PersonalPhoto.css'

export default function PersonalPhoto() {
  return (
    <section className="personal-photo" id="personal-photo">
      <div className="container">
        <div className="personal-photo-content">
          <div className="personal-photo-text">
            <h2 className="section-title">WHO IS SOLOMON?</h2>
            <p className="personal-photo-description">
              Developer. Designer. Builder.
            </p>
            <p className="personal-photo-description">
              I enjoy creating products that combine beautiful design with solid engineering.
            </p>
          </div>
          <div className="personal-photo-image">
            {/* In a real implementation, this would be an actual photo */}
            <div className="photo-placeholder">
              <div className="photo-icon">📸</div>
              <div className="photo-text">Professional Photo</div>
              <div className="photo-text-dark">Dark Background • Black Outfit • Professional Lighting</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}