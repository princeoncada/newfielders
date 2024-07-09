"use client";

import Image from "next/image";

export default function Groups() {
    return (
        <div className="flex flex-col gap-4 mt-4">
            <div className="flex flex-col gap-4 lg:flex-row max-w-full justify-center">
                <button
                    className="btn btn-ghost hover:bg-white w-full md:w-1/2 h-64 shadow-md border-gray-100"
                    onClick={() => {
                        const modal = document.getElementById(
                            "glee-modal"
                        ) as HTMLDialogElement;
                        if (modal) {
                            modal.showModal();
                        }
                    }}
                >
                    <Image
                        src="/images/ig/g.png"
                        alt="glee-club"
                        width={1000}
                        height={1000}
                    />
                </button>
                <button
                    className="btn btn-ghost hover:bg-white w-full md:w-1/2 h-64 shadow-md border-gray-100"
                    onClick={() => {
                        const modal = document.getElementById(
                            "dance-modal"
                        ) as HTMLDialogElement;
                        if (modal) {
                            modal.showModal();
                        }
                    }}
                >
                    <Image
                        src="/images/ig/d.png"
                        alt="dance-club"
                        width={1000}
                        height={1000}
                    />
                </button>
            </div>

            <div className="flex flex-col gap-4 lg:flex-row max-w-full justify-center">
                <button
                    className="btn btn-ghost hover:bg-white w-full md:w-1/2 h-64 shadow-md border-gray-100"
                    onClick={() => {
                        const modal = document.getElementById(
                            "chess-modal"
                        ) as HTMLDialogElement;
                        if (modal) {
                            modal.showModal();
                        }
                    }}
                >
                    <Image
                        src="/images/ig/cc.png"
                        alt="chess-club"
                        width={1000}
                        height={1000}
                    />
                </button>
                <button
                    className="btn btn-ghost hover:bg-white w-full md:w-1/2 h-64 shadow-md border-gray-100"
                    onClick={() => {
                        const modal = document.getElementById(
                            "church-modal"
                        ) as HTMLDialogElement;
                        if (modal) {
                            modal.showModal();
                        }
                    }}
                >
                    <Image
                        src="/images/ig/c.png"
                        alt="church-club"
                        width={1000}
                        height={1000}
                    />
                </button>
            </div>

            <div className="flex flex-col gap-4 lg:flex-row max-w-full justify-center">
                <button
                    className="btn btn-ghost hover:bg-white w-full md:w-1/2 h-64 shadow-md border-gray-100"
                    onClick={() => {
                        const modal = document.getElementById(
                            "bs-modal"
                        ) as HTMLDialogElement;
                        if (modal) {
                            modal.showModal();
                        }
                    }}
                >
                    <Image
                        src="/images/ig/bs.png"
                        alt="boys-club"
                        width={1000}
                        height={1000}
                    />
                </button>
                <button
                    className="btn btn-ghost hover:bg-white w-full md:w-1/2 h-64 shadow-md border-gray-100"
                    onClick={() => {
                        const modal = document.getElementById(
                            "gs-modal"
                        ) as HTMLDialogElement;
                        if (modal) {
                            modal.showModal();
                        }
                    }}
                >
                    <Image
                        src="/images/ig/gs.png"
                        alt="girls-club"
                        width={1000}
                        height={1000}
                    />
                </button>
            </div>

            <div className="flex flex-col gap-4 lg:flex-row max-w-full justify-center">
                <button
                    className="btn btn-ghost hover:bg-white w-full md:w-1/2 h-64 shadow-md border-gray-100"
                    onClick={() => {
                        const modal = document.getElementById(
                            "art-modal"
                        ) as HTMLDialogElement;
                        if (modal) {
                            modal.showModal();
                        }
                    }}
                >
                    <Image
                        src="/images/ig/a.png"
                        alt="art-club"
                        width={1000}
                        height={1000}
                    />
                </button>
                <button
                    className="btn btn-ghost hover:bg-white w-full md:w-1/2 h-64 shadow-md border-gray-100"
                    onClick={() => {
                        const modal = document.getElementById(
                            "journalism-modal"
                        ) as HTMLDialogElement;
                        if (modal) {
                            modal.showModal();
                        }
                    }}
                >
                    <Image
                        src="/images/ig/j.png"
                        alt="journalism-club"
                        width={1000}
                        height={1000}
                    />
                </button>
            </div>
        </div>
    );
}
