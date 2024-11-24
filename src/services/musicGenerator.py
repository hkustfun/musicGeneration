# src/services/musicGenerator.py

from magenta.models.music_vae import TrainedModel
from magenta.protobuf import music_pb2
import note_seq

def generate_music(tempo, time_signature, key_signature, chord_progression, mood, instruments):
    # Load pre-trained model
    model = TrainedModel(
        config=music_vae.configs.CONFIG_MAP['hierdec-trio_16bar'],
        batch_size=8,
        checkpoint_dir_or_path='path_to_checkpoint'
    )

    # Create primer sequence based on inputs
    primer_sequence = music_pb2.NoteSequence()
    primer_sequence.tempos.add(qpm=tempo)
    # Set key signature, time signature, etc.

    # Generate sequence
    generated_sequences = model.sample(n=1, length=16, primer_sequence=primer_sequence)

    # Convert to MIDI
    midi_filename = 'output.mid'
    note_seq.sequence_proto_to_midi_file(generated_sequences[0], midi_filename)

    # Save MIDI file and return path
    return midi_filename