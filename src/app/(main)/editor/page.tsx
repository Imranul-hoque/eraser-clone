import dynamic from 'next/dynamic';

const BlockNoteEditor = dynamic(
    async () => (await import("./_components/client")).Client,
    {
        ssr : false
    }
)


const Editor = () => {
    return (
        <div>
            <BlockNoteEditor />
        </div>
    )
}

export default Editor;