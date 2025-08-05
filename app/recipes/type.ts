export type Recipe = {
  id: number;
  nome: string;
  image_url: string;
  tempo: number;
  dificuldade: string;
  categoria: string;
  descricao: string;
};

export type RecipeFormData = {
  nome: string;
  tempo: number;
  dificuldade: string;
  categoria: string;
  descricao: string;
}