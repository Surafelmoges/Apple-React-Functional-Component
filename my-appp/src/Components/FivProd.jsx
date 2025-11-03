import React from 'react'
import AppleTvLogo from '../assets/images/icons/apple-tv-logo.png'
import Banker from '../assets/images/home/banker.png'
import Actors from '../assets/images/home/actors-lg.jpg'
import WatchSeries5Logo from '../assets/images/home/watch-series-5.jpg'
import WatchSeries55Logo from '../assets/images/icons/watch-series5-logo.png'
//import WatchSeries5Logo from '../assets/images/icons/watch-lg.jpg'


function FivProd() {
  return (
    <div>
      <section classNameName="fifth-heghlight-wrapper">
		<div className="container-fluid">
			<div className="row">
				<div className="left-side-wrapper col-sm-12 col-md-6">
					<div className="left-side-container" 
           style={{ backgroundImage: `url(${Actors})` }}>
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
								<img src={AppleTvLogo}/>
							</div>
						</div>

						<div className="tvshow-logo-wraper">
							<img src={Banker}/>
						</div>

						<div className="watch-more-wrapper">
							<a href="#">Watch now on the Apple TV App</a>
						</div>
					</div>
				</div>
				<div className="right-side-wrapper col-sm-12 col-md-6">
					<div className="right-side-container"
            style={{ backgroundImage: `url(${WatchSeries55Logo})` }}
          >
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
								<img src={WatchSeries5Logo}/>
							</div>
						</div>
						<div className="description-wraper">
							With the Always-On Retina display.<br />
							You’ve never seen a watch like this.
						</div>
						<div className="links-wrapper">
							<ul>
								<li><a href="">Learn more</a></li>
								<li><a href="">Buy</a></li>
							</ul> 
						</div>
					</div>
				</div>					
			</div>
		</div> 
	</section>
    </div>
  )
}

export default FivProd
