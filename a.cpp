#include<bits/stdc++.h>
using namespace std;
int main(){
    int a,b,n;
    cin>>a>>b>>n;
    int r=a;
    int p=0;
    int flag=0,flag1=0;
    for(int i=1;i<=n;i++){
        for(int j=0;j<=9;j++){
            p=(r*10)+j;
            if(p%b==0){
                r=r*10+j;
                flag=1;
                break;
            }
            else
            continue;
        }
        if(flag==0){
            flag1=1;
            break;
        }
        else
        continue;
    }
    if(flag1==1)
    cout<<"-1";
    else
    cout<<r;
}