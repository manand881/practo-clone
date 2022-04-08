import React from 'react'
import './DownloadApp.css'
import './style.css'

export const DownloadApp = () => {
	return (
		<div id="#downloadapp">
			<div className="container-fluid font">
				<div className="row background-color-f8 w-100 pt-5 pb-5 justify-content-md-center">
					<div className="col-sm-auto mr-5">
						<img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/footer-img.png"
							alt="Download Practo App" className="s-appbanner__image max-332" />
					</div>
					<div className="col-sm-auto mr-5 ml-5">
						<div className="max-436">
							<h1 className="text-center fw700 header">Download the Practo app</h1>
							<p className="fs14">Access video consultation with India’s top doctors on the Practo app. Connect with
								doctors
								online, available 24/7, from the comfort of your home.</p>
						</div>
						<div>
							<p className="u-font--16 fw700">Get the link to download the app</p>
						</div>
						<div id="phone">
							<div className="col fw700 fs14">
								<div className="d-inline phoneinput p15 ">
									<p className="d-inline ">+91</p>
								</div>
								<div className="d-inline phoneinput p15">
									<p className="d-inline pl-3 pr-3 enterphone">Enter Mobile Number</p>
								</div>
								<div className="d-inline match-height">
									<button type="button"
										className="btn bluebutton c-aaplink__btn u-font--14 d-inline match-height text-white fw700 ">Send
										SMS</button>
								</div>
							</div>
							<div className="col fw700 pt-5 fs14">
								<img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/google_play.png"
									alt="Get it on Google Play" className="store mr-2" />
								<img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/apple_store.png"
									alt="Download on the App Store" className="store" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}