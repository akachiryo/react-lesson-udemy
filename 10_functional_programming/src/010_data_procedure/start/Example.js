const Example = () => {
  // 関数型
  const nums = [1,2,3];

  const sum = (array) => {
    const nums = array;
    let sumValue = 0;
    for(let i = 0;i<nums.length;i++) {
      sumValue += nums[i];
    }
    return sumValue;
  }


  // オブジェクト指向
  const numObj = {
    nums: [1,2,3],
    sum() {
      const nums = this.nums;
      let sumValue = 0;
      for(let i = 0;i<nums.length;i++) {
        sumValue += nums[i];
      }
      return sumValue;
    }
  }

  return (
    <>
      <h3>オブジェクト指向：{numObj.sum()}</h3>
      <h3>関数型{sum(nums)}</h3>
    </>
  );
};

export default Example;
