export interface Video {
  id: string;
  numero: string;
  titulo: string;
  categoria: string;
  categoriaSlug: string;
  descritivo?: string;
}

export interface Categoria {
  slug: string;
  label: string;
}