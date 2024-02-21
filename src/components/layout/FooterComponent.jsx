const FooterComponent = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="d-flex justify-content-center py-3 position-fixed left-0 bottom-0 w-100">
      <p className="m-0">
        Copyright &copy; BPdevelopment {currentYear}
      </p>
    </footer>
  )
}

export default FooterComponent