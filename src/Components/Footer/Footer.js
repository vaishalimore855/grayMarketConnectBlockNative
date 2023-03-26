import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-secondary bg-opacity-10 py-5 mt-3 mt-md-5">
            <div className="container mb-5 mt-0 mt-md-5">
               <div className="row py-5">
                  <div className="col-md-6 text-secondary mb-5 mb-md-0">
                     <div className="border-top border-2 border-secondary pt-3">
                        <h2 className="display-4 fw-bold">Community</h2>
                        <p>Join Gray Market's thriving community on...</p>
                        <div className="hstack gap-3">
                           <div><a href="#" className="text-secondary">Telegram</a></div>
                           <div><a href="#" className="text-secondary">Discord</a></div>
                           <div><a href="#" className="text-secondary">Twitter</a></div>
                           <div><a href="#" className="text-secondary">Medium</a></div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 text-secondary">
                     <div className="border-top border-2 border-secondary pt-3">
                        <h2 className="display-4 fw-bold">Tutorials</h2>
                        <p>Stuck? Check out our tutorials on Gray Fund Academy.</p>
                        <div className="row">
                           <div className="col-md-8 mb-1 mb-md-0">Still can’t find what you’re looking for?</div>
                           <div className="col-md-4 text-md-end"><a href="#" className="text-secondary">Contact Us</a></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
    </>
  )
}

export default Footer
