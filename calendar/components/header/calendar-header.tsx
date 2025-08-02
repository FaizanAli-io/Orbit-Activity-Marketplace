import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { TodayButton } from '@/calendar/components/header/today-button';
import { DateNavigator } from '@/calendar/components/header/date-navigator';
import { AddEventDialog } from '@/calendar/components/dialogs/add-event-dialog';

import type { IEvent } from '@/calendar/interfaces';
import type { TCalendarView } from '@/calendar/types';

interface IProps {
  view: TCalendarView;
  events: IEvent[];
}

export function CalendarHeader({ view, events }: IProps) {
  return (
    <div className='flex flex-col gap-4 border-b p-4 lg:flex-row lg:items-center lg:justify-between'>
      <div className='flex items-center gap-3'>
        <TodayButton />
        <DateNavigator view={view} events={events} />
      </div>

      <div className='flex flex-col items-center gap-1.5 sm:flex-row sm:justify-between '>
        <div className='flex w-full items-center gap-1.5'>
          {/* <div className='inline-flex first:rounded-r-none last:rounded-l-none [&:not(:first-child):not(:last-child)]:rounded-none space-x-1'>
            <Button
              asChild
              aria-label='View by week'
              size='icon'
              variant={view === 'week' ? 'default' : 'outline'}
              // className='-ml-px rounded-none [&_svg]:size-2'
              className='p-1'
            >
              <Columns strokeWidth={1.5} />
            </Button>

            <Button
              asChild
              aria-label='View by month'
              size='icon'
              variant={view === 'month' ? 'default' : 'outline'}
              className='p-1'
            >
              <Grid2x2 strokeWidth={1.5} />
            </Button>

            <Button
              asChild
              aria-label='View by year'
              size='icon'
              variant={view === 'year' ? 'default' : 'outline'}
              className='p-1'
            >
              <Grid3x3 strokeWidth={1.5} />
            </Button>

            <Button
              asChild
              aria-label='View by agenda'
              size='icon'
              variant={view === 'agenda' ? 'default' : 'outline'}
              className='p-1'
            >
              <CalendarRange strokeWidth={1.5} />
            </Button>
          </div> */}

          {/* <UserSelect /> */}
        </div>

        <AddEventDialog>
          <Button className='w-full sm:w-auto'>
            <Plus />
            Add Event
          </Button>
        </AddEventDialog>
      </div>
    </div>
  );
}
