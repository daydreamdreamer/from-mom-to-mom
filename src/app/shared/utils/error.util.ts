export function getErrorMessage(err: any): string {
  if (!err) return 'Нещо се обърка';

  if (err.status === 0) {
    return 'Няма връзка със сървъра';
  }

  if (err.status === 401) {
    return 'Невалиден имейл или парола';
  }

  if (err.status === 403) {
    return 'Нямаш достъп до това действие';
  }

  if (err.status === 404) {
    return 'Ресурсът не е намерен';
  }

  if (err.status === 500) {
    return 'Сървърна грешка. Опитай по-късно';
  }

  return err.error?.message || 'Нещо се обърка';
}