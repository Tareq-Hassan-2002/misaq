import type { LectureBlock } from '../../types'
import TitleBlock from './blocks/TitleBlock'
import ParagraphBlock from './blocks/ParagraphBlock'
import PriorityBlock from './blocks/PriorityBlock'
import NoteBlock from './blocks/NoteBlock'
import ExampleBlock from './blocks/ExampleBlock'
import PrerequisiteBlock from './blocks/PrerequisiteBlock'
import ExerciseBlock from './blocks/ExerciseBlock'
import DefinitionBlock from './blocks/DefinitionBlock'
import KeyConceptBlock from './blocks/KeyConceptBlock'
import ComparisonBlock from './blocks/ComparisonBlock'
import './LectureRenderer.css'

interface LectureRendererProps {
  blocks: LectureBlock[]
}

const LectureRenderer = ({ blocks }: LectureRendererProps) => {
  return (
    <div className="lecture-renderer">
      {blocks.map((block) => {
        switch (block.type) {
          case 'title':
            return <TitleBlock key={block.id} block={block} />
          case 'paragraph':
            return <ParagraphBlock key={block.id} block={block} />
          case 'priority':
            return <PriorityBlock key={block.id} block={block} />
          case 'note':
            return <NoteBlock key={block.id} block={block} />
          case 'example':
            return <ExampleBlock key={block.id} block={block} />
          case 'prerequisite':
            return <PrerequisiteBlock key={block.id} block={block} />
          case 'exercise':
            return <ExerciseBlock key={block.id} block={block} />
          case 'definition':
            return <DefinitionBlock key={block.id} block={block} />
          case 'keyConcept':
            return <KeyConceptBlock key={block.id} block={block} />
          case 'comparison':
            return <ComparisonBlock key={block.id} block={block} />
          default:
            return null
        }
      })}
    </div>
  )
}

export default LectureRenderer
