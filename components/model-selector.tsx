import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

const models = ['gpt-3.5-turbo', 'gpt-4', 'gpt-4-1106-preview']

interface ModelSelectorProps {
  value: string
  onChange: (model: string) => void
}

const ModelSelector = ({ value, onChange }: ModelSelectorProps) => {
  return (
    <div className="flex flex-col">
      <label
        className="mb-3 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor=":r1s:-form-item"
      >
        Model
      </label>
      <Select onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue>{value}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {models.map(model => (
            <SelectItem key={model} value={model}>
              {model}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export { ModelSelector }
