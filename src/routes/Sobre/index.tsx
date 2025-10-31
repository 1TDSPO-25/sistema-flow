import { HeroSobre } from '../../components/HeroSobre/HeroSobre';
import { NossaHistoria } from '../../components/NossaHistoria/NossaHistoria';
import { NossosValores } from '../../components/NossosValores.tsx/NossosValores';

export default function Sobre(){
  return (
    <main className="bg-slate-50 text-slate-800">
        <HeroSobre />
        <NossaHistoria />
        <NossosValores />
    </main>
  );
}