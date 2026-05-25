'use client';

import { useMemo, useState } from 'react';
import { defaultFourPointScale, type LetterGrade } from '@/content/grade-scales';
import { calculateGpa, type CourseInput } from '@/lib/calculators/gpa';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { ResultBox } from '@/components/ui/ResultBox';
import { Select } from '@/components/ui/Select';

const gradeOptions = Object.keys(defaultFourPointScale.letterToPoints) as LetterGrade[];

function createCourse(index: number): CourseInput {
  return { id: `course-${index}-${Date.now()}`, name: `Course ${index}`, credits: 3, grade: 'A' };
}

export function GpaCalculator() {
  const [courses, setCourses] = useState<CourseInput[]>([
    { id: 'course-1', name: 'Course 1', credits: 3, grade: 'A' },
    { id: 'course-2', name: 'Course 2', credits: 4, grade: 'B' }
  ]);

  const result = useMemo(
    () => calculateGpa(courses, defaultFourPointScale),
    [courses]
  );

  const updateCourse = (id: string, patch: Partial<CourseInput>) => {
    setCourses((current) =>
      current.map((course) => (course.id === id ? { ...course, ...patch } : course))
    );
  };

  return (
    <Card>
      <div className="space-y-4">
        {courses.map((course) => (
          <div className="grid gap-3 md:grid-cols-[1fr_120px_140px_auto]" key={course.id}>
            <Input
              label="Course name"
              value={course.name}
              onChange={(event) => updateCourse(course.id, { name: event.target.value })}
            />
            <Input
              error={course.credits < 0 ? 'Credits cannot be negative.' : undefined}
              label="Credits"
              min={0}
              step={0.5}
              type="number"
              value={course.credits}
              onChange={(event) =>
                updateCourse(course.id, { credits: Number(event.target.value) })
              }
            />
            <Select
              label="Grade"
              value={course.grade}
              onChange={(event) =>
                updateCourse(course.id, { grade: event.target.value as LetterGrade })
              }
            >
              {gradeOptions.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </Select>
            <div className="flex items-end">
              <Button
                disabled={courses.length === 1}
                variant="ghost"
                onClick={() =>
                  setCourses((current) => current.filter((item) => item.id !== course.id))
                }
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button onClick={() => setCourses((current) => [...current, createCourse(current.length + 1)])}>
          Add course
        </Button>
        <Button variant="secondary" onClick={() => setCourses([createCourse(1)])}>
          Reset
        </Button>
      </div>

      <div className="mt-6">
        <ResultBox
          description={`${result.totalCredits} credits and ${result.totalGradePoints} grade points are included.`}
          title="Estimated GPA"
          value={result.gpa.toFixed(2)}
        />
      </div>
    </Card>
  );
}
