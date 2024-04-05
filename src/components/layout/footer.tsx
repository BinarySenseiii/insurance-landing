const Footer = () => {
  return (
    <footer className="bg-primary py-4">
      <div className="container text-white text-center">
        <span className="text-sm">
          © {new Date().getFullYear()} CarinsuranceDxb.com All Rights Reserved.
        </span>
        <div className="space-x-2 text-sm">
          <a>Privacy Policy</a>
          <a>Terms and Conditions</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
