import React from 'react'
import MacProduct from '../assets/images/home/macbookair-new.jpg'
function SecondPro() {
  return (
    <div>
      <section class="second-hightlight-wrapper"
	 style={{ backgroundImage: `url(${MacProduct})` }}
	  
	  >
		<div class="container">

			<div class="new-alert">
				New
			</div>

			<div class="title-wraper bold black">
				MacBook Air 
			</div> 

			<div class="description-wrapper black">
				Twice the speed. Twice the storage.
			</div>

			<div class="price-wrapper grey">
				From $999.
			</div>

			<div class="links-wrapper">
				<ul>
					<li><a href="">Learn more</a></li>
					<li><a href="">Buy</a></li>
				</ul> 
			</div>
		</div>
	</section>
    </div>
  )
}

export default SecondPro
