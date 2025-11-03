import React from 'react'
import Iphone11Colored from '../assets/images/home/iphone11-bg.jpg'
import IappleBlue from '../assets/images/home/apple-blue-logo.jpg'


function FourthProd() {
  return (
    <div>
      <section class="fourth-heghlight-wrapper">
		<div class="container-fluid">
			<div class="row">
				<div class="left-side-wrapper col-sm-12 col-md-6">    
					<div class="left-side-container" style={{ backgroundImage: `url(${Iphone11Colored})` }}>
						<div class="title-wraper">
							iPhone 11 
						</div> 
						<div class="description-wraper">
							Just the right amount of everything.
						</div>
						<div class="price-wrapper">
							From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
						</div>

						<div class="links-wrapper">
							<ul>
								<li><a href="">Learn more</a></li>
								<li><a href="">Apply now</a></li>
							</ul> 
						</div>
					</div>
				</div>
				<div class="right-side-wrapper col-sm-12 col-md-6">
					<div class="right-side-container"
            style={{ backgroundImage: `url(${IappleBlue})` }} 
          >
						<div class="title-wraper white">
							Get the latest CDC response to COVID-19. 
						</div> 

						<div class="links-wrapper white">
							<ul>
								<li><a href="">Watch the PSA</a></li>
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

export default FourthProd
