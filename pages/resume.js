import BaseLayout from '@/layouts/BaseLayout';

const Resume=()=>{
return(
	  <BaseLayout>
	  
		{/* <div className="row mt-4">
		  <div className="col-md-8 offset-md-2">
			<iframe src="/hagos_resume.pdf" style={{width: '100%', height: '800px'}}>
			</iframe>
		  </div>
		</div> */}
		<div className="container resume">
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Computer Science Enginnering
                        </h5>
                        <p className="resume-card__name">
                            Academy of Technology(2017-2021)
                        </p>
                        <p className="resume-card__details">I am currently persuing B.tech in Computer Science Engineering from Academy of Technology</p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Intern
                        </h5>
                        <p className="resume-card__name">
                            TCS (2020)
                        </p>
                        <p className="resume-card__details">I work as a intern in TCS and also completed some projects on testing</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                       
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language__body mt-3">
                       
                    </div>
                </div>
            </div>
        </div>
	  </BaseLayout>
	)
}
    export default Resume;