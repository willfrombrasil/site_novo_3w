import Swal from 'sweetalert2'

export const useAlert = () => {
  const showSuccess = (title: string, text?: string) => {
    return Swal.fire({
      icon: 'success',
      title,
      text,
      confirmButtonText: 'OK',
      confirmButtonColor: '#3b82f6',
      timer: 3000,
      timerProgressBar: true
    })
  }

  const showError = (title: string, text?: string) => {
    return Swal.fire({
      icon: 'error',
      title,
      text,
      confirmButtonText: 'OK',
      confirmButtonColor: '#ef4444'
    })
  }

  const showWarning = (title: string, text?: string) => {
    return Swal.fire({
      icon: 'warning',
      title,
      text,
      confirmButtonText: 'OK',
      confirmButtonColor: '#f59e0b'
    })
  }

  const showInfo = (title: string, text?: string) => {
    return Swal.fire({
      icon: 'info',
      title,
      text,
      confirmButtonText: 'OK',
      confirmButtonColor: '#3b82f6'
    })
  }

  const showConfirm = (title: string, text?: string) => {
    return Swal.fire({
      icon: 'question',
      title,
      text,
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
      confirmButtonColor: '#3b82f6',
      cancelButtonColor: '#6b7280'
    })
  }

  const showLoading = (title: string = 'Carregando...') => {
    return Swal.fire({
      title,
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading()
      }
    })
  }

  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
    showConfirm,
    showLoading
  }
}
