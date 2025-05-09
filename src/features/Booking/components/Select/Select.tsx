import { Select as SelectPrimitive } from 'radix-ui';
import type { ReactNode } from 'react';
import './Select.css';
import PassengerIcon from '../../assets/icons/passenger.svg?react';
import ChevronIcon from '../../assets/icons/chevron.svg?react';

interface SelectProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {
    children: ReactNode;
}

export function Select({children, ...props}: SelectProps) {
    return (
        <SelectPrimitive.Root {...props}>
			<div className='select-container'>
				<PassengerIcon className='select-icon'/>
				<SelectPrimitive.Trigger className='select'>
					<SelectPrimitive.Value/>
					<SelectPrimitive.Icon className='select-chevron'>
						<ChevronIcon/>
					</SelectPrimitive.Icon>
				</SelectPrimitive.Trigger>
			</div>
			<SelectPrimitive.Portal>
				<SelectPrimitive.Content className='select-content' position='popper'>
					<SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
				</SelectPrimitive.Content>
			</SelectPrimitive.Portal>
		</SelectPrimitive.Root>
    )
}

interface SelectItemProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {
    children: ReactNode;
    value: string;
}

export function SelectItem({children, value, ...props}: SelectItemProps) {
    return (
        <SelectPrimitive.Item className='select-item' value={value} {...props}>
            <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        </SelectPrimitive.Item>        
    )
}