function makeStudentsReport(data) {
  let result = [];
  for (let i = 0;i < data.length; i++) {
    const student = data[i];
    result.push(`${student.name}: ${student.grade}`);
  }
  return result;
}
