export class CreateFruitDto {
  readonly name: string;
  readonly color: string;
  readonly description: string;
  readonly subTitle: string;
  readonly image: string;
  readonly general: {
    readonly gen_name: string;
    readonly gen_genes: string;
    readonly gen_family: string;
    readonly gen_order: string;
  };
  readonly nutrition: {
    readonly carbohydrates: number;
    readonly protein: number;
    readonly fat: number;
    readonly calories: number;
    readonly sugar: number;
  };
}
