import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'

interface TemperatureSelectorProps {
  value: number
  onChange: (model: number) => void
}

const TemperatureSelector = ({ value, onChange }: TemperatureSelectorProps) => {
  return (
    <div className="flex flex-col">
      <label
        className="mb-3 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor=":r1s:-form-item"
      >
        Temperature
      </label>
      <Input
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        type="number"
        max="2"
      />
    </div>
  )
}

export { TemperatureSelector }
