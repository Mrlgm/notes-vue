<template>
    <div class="note-wrapper">
        <div class="header">
            <span class="time">{{time | formatTime}}</span>
            <Icon @click.native="deleteThisNote" class="close" name="close"></Icon>
        </div>
        <div class="content">
            {{content}}
        </div>
        <div class="grade">
            <Star :num="grade"></Star>
        </div>
        <div class="complete">
            <div v-if="roundOff" class="finish">
                已完成
            </div>
            <div @click="completeNote" v-if="!roundOff" class="yes">
                <img style="height: 16px;width: 16px;" src="../assets/yes.png" alt="yes">
            </div>
        </div>
    </div>
</template>

<script>
    import Icon from './Icon'
    import Star from './Star'
    import Notes from '../api/notes'
    import Bus from '../helpers/bus'

    export default {
        name: "note",
        components: {
            Icon,
            Star
        },
        props: {
            grade: {
                type: Number,
                default: 3
            },
            complete: {
                type: Boolean,
                default: false
            },
            content: {
                type: String
            },
            time: {
                type: String
            },
            noteId: {
                type: String
            }
        },
        data() {
            return {
                finish: false
            }
        },
        computed:{
            roundOff(){
                return this.complete || this.finish
            }
        },
        methods: {
            onClick(e) {
                console.log(e)
            },
            deleteThisNote() {
                Notes.deleteNote({noteId: this.noteId}).then((e) => {
                    this.$toast(e.msg)
                    Bus.$emit('delete:note', this.noteId)
                })
            },
            completeNote() {
                Notes.updateNotes({noteId: this.noteId, content: this.content, complete: true, grade: this.grade})
                    .then((e) => {
                        this.finish = true
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .note-wrapper {
        width: 250px;
        border: 1px solid #EDEDED;
        border-radius: 4px;
        padding: 16px;
        background: #fff;

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 10px;
            border-bottom: 1px solid #EAEAEA;
            color: #D8D8D8;
            font-size: 14px;

            .time {
                color: #898989;
            }

            .close {
                cursor: pointer;
            }
        }

        .content {
            padding: 10px 0;
            border-bottom: 1px solid #EAEAEA;
        }

        .grade {
            padding: 20px 0;
        }

        .complete {
            font-size: 12px;
            color: #fff;
            display: flex;

            .finish {
                background-color: #4DB4E7;
                padding: 5px 12px;
                border-radius: 14px;

            }

            .yes {
                padding: 5px 12px;
                border-radius: 14px;
                width: 60px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 16px;
                background-color: #00D3AA;
                cursor: pointer;
            }
        }
    }
</style>