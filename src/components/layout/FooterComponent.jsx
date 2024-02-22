const FooterComponent = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="d-flex justify-content-center py-3">
      <p className="m-0">
        Copyright &copy; BPdevelopment {currentYear}
      </p>
    </footer>
  )
}

export default FooterComponent