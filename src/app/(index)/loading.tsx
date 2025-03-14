import { Skeleton } from '@/components/ui/skeleton';

const Loading = async () => {
  return (
    <div className="container flex items-center space-x-4 my-20">
      <div className="w-64 space-y-4">
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[150px]" />
      </div>
      <div className="flex-1 space-y-4">
        <Skeleton className="h-4 w-[150px]" />
        <div className="grid grid-cols-3 gap-4">
          <Skeleton className="h-48 rounded-md" />
          <Skeleton className="h-48 rounded-md" />
          <Skeleton className="h-48 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
