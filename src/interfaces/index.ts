export interface HeaderInterface {
  error?: string,
  onSubmit: (number: string) => void,
  onError: (error: string) => void,
}

export interface DataTableInterface {
  owner: string,
  year: number,
  crashesCount: number,
  ownersCount: number,
}

export interface InfoTableInterface {
  data: DataTableInterface,
}

export interface HeaderSearchInterface {
  onSubmit: (number: string) => void,
  onError: (error: string) => void,
}

export interface MainInterface {
  data: DataTableInterface,
  isLoading: boolean,
}
