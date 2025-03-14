'use client';

import { SortValue } from '@/Types/global';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';
import { SortStroe } from '@/store/sortStore';

const Sort = () => {
  const { value, setValue } = SortStroe();

  const handleValueChange = (value: SortValue) => {
    setValue(value);
  };
  return (
    <div className="w-64 py-4">
      <p className="m-5 text-[20px]">Sort By</p>
      <ToggleGroup
        className="flex flex-col gap-2 pl-[30px]"
        type="single"
        size="default"
        defaultValue={value}
        onValueChange={handleValueChange}
      >
        <ToggleGroupItem
          style={{ fontSize: '18px' }}
          value="latest"
        >
          latest
        </ToggleGroupItem>
        <ToggleGroupItem
          style={{ fontSize: '18px' }}
          value="low"
        >
          Price: Low
        </ToggleGroupItem>
        <ToggleGroupItem
          style={{ fontSize: '18px' }}
          value="high"
        >
          Price: High
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default Sort;
