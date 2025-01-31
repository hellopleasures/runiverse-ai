interface Attribute {
  trait_type: string;
  value: string | number;
  filename: string | null;
}

interface Character {
  image_url?: string;
  name?: string;
  attributes?: Attribute[];
  contract?: string;
} 