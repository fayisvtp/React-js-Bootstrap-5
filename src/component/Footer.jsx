import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <section className="section footer bg-dark text-white">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h5>Company Information</h5>
                    <hr/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Pariatur magnam, fugiat rerum nihil, commodi iure officiis
                         sunt laborum quidem suscipit ad nostrum at reiciendis maxime
                          doloribus? Ex dolor quibusdam aperiam.</p>
                </div>
                <div className="col-md-4">
                    <h6>Quick Links</h6>
                    <hr />
                    <div> <Link to='/'>Home</Link> </div>
                    <div> <Link to='/about'>About Us</Link> </div>
                    <div> <Link to='/contact'>Contact Us</Link> </div>
                    <div> <Link to='/service'>Our Services</Link> </div>
                </div>
                <div className='col-md-4'>
                    <h6>Contact Information</h6>
                    <hr />
                    <div id='adress'><p className="text-white mb-1">xxxxxxxxxxxxxxxx</p></div>
                    <div id='number'><p className="text-white mb-1">xxxxxxxxxxxxxxxx</p></div>
                    <div id='number'><p className="text-white mb-1">xxxxxxxxxxxxxxxx</p></div>
                    <div id='email'><p className="text-white mb-1">xxxxxxxxxxxxxxxx</p></div>
                </div>
            </div>
        </div>
      </section>
    </div> 
  )
}

export default Footer
