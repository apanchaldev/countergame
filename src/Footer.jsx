





const Footer = ({resetClick}) => {
    return (
      <>
        <div className="bg-secondary text-white text-center py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-4 offset-md-4 text-center">
                <button className="btn btn-danger" onClick={() => resetClick()}>Reset</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Footer;