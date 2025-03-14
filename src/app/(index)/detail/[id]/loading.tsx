import { Skeleton } from '@/components/ui/skeleton';

const Loading = async () => {
  return (
    <div className="container flex my-20">
      <div className="w-64 h-full flex flex-col gap-4">
        <Skeleton className="h-[10px] w-[100px]" />
        <Skeleton className="h-[150px] w-[150px]" />
      </div>
      <div className="flex-1 mx-[20px] h-full flex items-center justify-center">
        <Skeleton className="w-full h-48" />
      </div>
      <div className="w-64 flex flex-col gap-4">
        <Skeleton className="h-[16px] w-[100px] rounded-md" />
        <div className="grid grid-cols-3 gap-4">
          <Skeleton className="h-[12px] rounded-md" />
          <Skeleton className="h-[12px] rounded-md" />
          <Skeleton className="h-[12px] rounded-md" />
        </div>
        <div className="flex flex-col gap-4">
          <Skeleton className="h-[12px] w-[50px] rounded-md" />
          <Skeleton className="h-[12px] w-[60px] rounded-md" />
        </div>
        <div>
          <Skeleton className="h-[36px] w-[100px] rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
