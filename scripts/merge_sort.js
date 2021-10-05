function Merge_sort() {
    c_delay=0;
    merge_partition(0,array_size-1);
    enable_buttons();
}

function merge_sort(start,mid,end) {
    let p=start,q=mid+1;
    let Arr=[],k=0;
    for(let i=start; i<=end; i++) {
        if (p > mid) {
            Arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"red");
        } else if(q>end) {
            Arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"red");
        } else if(div_sizes[p]<div_sizes[q]) {
            Arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"red");
        } else {
            Arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"red");
        }
    }

    for(let t=0;t<k;t++) {
        div_sizes[start++]=Arr[t];
        div_update(divs[start-1],div_sizes[start-1],"green");
    }
}

function merge_partition(start,end) {
    if(start < end) {
        let mid=Math.floor((start + end) / 2);
        div_update(divs[mid],div_sizes[mid],"yellow");

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}