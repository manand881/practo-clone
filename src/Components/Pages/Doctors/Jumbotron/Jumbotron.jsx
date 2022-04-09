import React from 'react'
import './Jumbotron.css'
import icon from './security_1.webp'

export const Jumbotron = () => {
	return (
		<section>
			<style scoped>
				@import url('https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css');
			</style>
			<div className="bg-dark-blue">
				<div className="row">
					<div className="col align-self-center">
						<div className="container-fluid ">
							<div className="jumbotron jumbotron-fluid min-460 imagebackground">
								<div className="container justify-items-center">
									<div className="row">
										<div className="col d-flex justify-content-center">
											<div className="row">
												<p className="header-text font">Your home for health</p>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col d-flex justify-content-center">
											<div className="row">
												<p className="book-text font mt-5">Find and Book</p>
											</div>
										</div>
									</div>
									<div className="row justify-content-center">
										<input type="text"  placeholder="Bangalore" className="p-1 f14 min-50"/>
											<input type="text"  className="p-1 f14 fit-content min-50"
												placeholder="Search Doctors, clinics, hospitals"/>
											</div>
									</div>
									<div className="row">
										<div className="col d-flex justify-content-center">
											<div className="row mt-2">
												<div className="col">
													<p className="font mt-2 f12 grey-font">Popular Searches</p>
												</div>
												<div className="col">
													<p className="font mt-2 f12 grey-font">Dermatolgist</p>
												</div>
												<div className="col">
													<p className="font mt-2 f12 grey-font">Pediatrician</p>
												</div>
												<div className="col">
													<p className="font mt-2 f12 grey-font">Gynecologist</p>
												</div>
												<div className="col">
													<p className="font mt-2 f12 grey-font">Others</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-darkerblue">
					<div className="row">
						<div className="col d-flex justify-content-center">
							<div className="row mt-2 pt-1 pb-1">
								<div className="col">
									<p className="font mt-2 consult text-center">Consult With Doctor</p>
								</div>
								<div className="col">
									<p className="font mt-2 consult text-center">Other Medicines</p>
								</div>
								<div className="col">
									<p className="font mt-2 consult text-center">View Medical Records</p>
								</div>
								<div className="col">
									<p className="font mt-2 consult text-center">Book Test</p>
								</div>
								<div className="col">
									<p className="font mt-2 consult text-center">Read Articles</p>
								</div>
								<div className="col">
									<p className="font mt-2 consult text-center">For Healthcare Providers</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="h7000 light-grey">
            <div className="row p-5">
                <div className="col d-flex justify-content-center ">
                    <div className="row p-5">
                        <div className="col p-5">
                            <p className="font big">Safety of your data is our
                                <span className="bold big700"><br/>top priority.</span>
                            </p>
                            <ul className="nonelist">
                                <li>
                                    <p className="liitem font"><span>&#10003;</span> Multi-level security checks</p>
                                </li>
                                <li>
                                    <p className="liitem font"><span>&#10003;</span> Multiple data backups</p>
                                </li>
                                <li>
                                    <p className="liitem font"><span>&#10003;</span> Stringent data privacy policies</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col p-5"><img src={icon} width="250"/></div>
                    </div>
                </div>
            </div>
        </div>
		</section>
	)
}