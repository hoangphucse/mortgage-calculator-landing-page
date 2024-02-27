import { SliderRangeAttribute } from '@/models/common';
interface RangeSliderProp {
  value: number;
  range: SliderRangeAttribute;
  onChange?: (value: number | string) => void;
}

export default function RangeSlider({
  value,
  range,
  onChange,
}: RangeSliderProp) {
  const handleRangeValueChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.currentTarget.value as unknown as number);
    }
  };

  return (
    <input
      className='w-full'
      type='range'
      min={range.min}
      max={range.max}
      value={value}
      onChange={handleRangeValueChange}
    />
  );
}
