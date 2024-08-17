
function Navbar({ onSearch }) {
  return (
    <nav className="navbar" style={{backgroundColor:"#e9ecef"}}>
      <div className="container-fluid">
      <a type="button" href="/" className="btn  btn-lg">MobileInsight</a>
      <a type="button" href="/About" className="btn">About</a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search......"
            aria-label="Search"
          />
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
