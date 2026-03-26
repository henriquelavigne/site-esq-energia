import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Input from "@/components/ui/Input";
import Checkbox from "@/components/ui/Checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import SectionLabel from "@/components/shared/SectionLabel";
import SectionHeading from "@/components/shared/SectionHeading";
import GlassCard from "@/components/shared/GlassCard";
import { Plus } from "lucide-react";

export default function TestUIPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg-deep)] p-10 text-white space-y-12">
      <section className="space-y-4">
        <SectionLabel text="UI Components Test" />
        <SectionHeading gradient>ESQ Energia — Base UI</SectionHeading>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <GlassCard className="space-y-6">
          <SectionHeading as="h3">Buttons</SectionHeading>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline-green">Outline Green</Button>
            <Button variant="outline-blue">Outline Blue</Button>
            <Button variant="ghost">Ghost Button</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button size="sm" icon={<Plus size={16} />}>Small with Icon</Button>
            <Button size="md">Medium Button</Button>
            <Button size="lg">Large Button</Button>
          </div>
        </GlassCard>

        <GlassCard className="space-y-6">
          <SectionHeading as="h3">Badges & Labels</SectionHeading>
          <div className="flex gap-4 items-center">
            <Badge>Novo</Badge>
            <SectionLabel text="Energia Digital" />
          </div>
        </GlassCard>

        <GlassCard className="space-y-6">
          <SectionHeading as="h3">Form Elements</SectionHeading>
          <div className="space-y-4">
            <Input placeholder="Seu nome" />
            <Input type="email" placeholder="seu@email.com" />
            
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecione sua distribuidora" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="enel">Enel</SelectItem>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="cemig">CEMIG</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-sm cursor-pointer opacity-80">
                Aceito os termos e condições
              </label>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="space-y-6">
          <SectionHeading as="h3">Glass Card Variant</SectionHeading>
          <p className="text-[var(--color-text-secondary)]">
            Este é um exemplo de texto dentro de um GlassCard com estilos da ESQ Energia.
          </p>
          <Button variant="primary" className="w-full">Ação Principal</Button>
        </GlassCard>
      </section>
    </main>
  );
}
