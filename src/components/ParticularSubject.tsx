import React from 'react';

export default function ParticularSubject({
  courseCode,
}: {
  courseCode: string;
}) {
  const [code, ...titleParts] = courseCode.split('-');

  return (
    <div>
      <div>
        <h1>Books</h1>
        <p></p>
      </div>
      <div>
        <h1></h1>
        <p></p>
      </div>
      <div>
        <h1></h1>
        <p></p>
      </div>
      <div>
        <h1></h1>
        <p></p>
      </div>
    </div>
  );
}
