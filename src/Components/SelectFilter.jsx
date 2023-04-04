import { AiOutlineArrowDown } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import * as Select from "@radix-ui/react-select";
import { useState, forwardRef } from "react";

function SelectFilter({ selectedItem, setSelectedItem }) {
  const feedBackFilter = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];
  return (
    <Select.Root value={selectedItem} onValueChange={setSelectedItem}>
      <Select.Trigger
        className="SelectTrigger ml-2 text-white font-bold flex items-center focus:border border-purple-500"
        aria-label={selectedItem}
      >
        <Select.Value placeholder={selectedItem} />
        <Select.Icon className="SelectIcon">
          <AiOutlineArrowDown className="ml-2" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal className="">
        <Select.Content
          onCloseAutoFocus={(e) => e.preventDefault()}
          position="popper"
          className="SelectContent bg-white overflow-hidden rounded-md shadow-md w-[280px] mt-7"
        >
          <Select.Viewport className="SelectViewport">
            <Select.Group>
              {feedBackFilter.map((filter) => {
                return (
                  <SelectItem key={filter} value={filter}>
                    {filter}
                  </SelectItem>
                );
              })}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

const SelectItem = forwardRef(({ children, ...props }, forwardedRef) => {
  return (
    <div className="first:border border-b p-2">
      <Select.Item
        {...props}
        className="flex items-center justify-between h-[30px] data-[highlighted]:outline-none cursor-pointer data-[highlighted]:text-purple-600 transition-colors duration-[0.3s] select-none"
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
          <BsCheck size={28} />
        </Select.ItemIndicator>
      </Select.Item>
    </div>
  );
});

export default SelectFilter;
