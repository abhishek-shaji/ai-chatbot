import React from 'react'
import { ModelSelector } from '@/components/model-selector'
import { TemperatureSelector } from '@/components/temprature-selector'

interface ChatConfigMenuProps {
  model: string
  temperature: number
  onModelChange: (model: string) => void
  onTemperatureChange: (temperature: number) => void
}

const ChatConfigMenu = ({
  model,
  temperature,
  onModelChange,
  onTemperatureChange
}: ChatConfigMenuProps) => {
  return (
    <div className="mx-auto mb-4 max-w-4xl px-4">
      <div className="grid grid-cols-2 gap-x-4 rounded-lg border bg-background p-8">
        <ModelSelector value={model} onChange={onModelChange} />
        <TemperatureSelector
          value={temperature}
          onChange={onTemperatureChange}
        />
      </div>
    </div>
  )
}

export { ChatConfigMenu }
